/**
 * CartContext — global cart state for BRIO Coffee ordering.
 * Pure frontend/UI; designed so `addItem`, `clearCart`, etc.
 * can later call a real API with minimal refactoring.
 */

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  type ReactNode,
} from 'react';

/* ─── types ──────────────────────────────────────────────── */

export interface CartItemData {
  name: string;
  /** Price string as stored in site.ts — e.g. "600" means 600 LBP (000) */
  price: string;
  image?: string;
  category: string;
}

export interface CartItem {
  item: CartItemData;
  qty: number;
  notes: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  /** Name of the most-recently-added item (for card flash animation) */
  lastAdded: string | null;
}

type CartAction =
  | { type: 'ADD_ITEM'; item: CartItemData }
  | { type: 'REMOVE_ITEM'; name: string }
  | { type: 'UPDATE_QTY'; name: string; delta: number }
  | { type: 'SET_NOTES'; name: string; notes: string }
  | { type: 'CLEAR_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'CLEAR_LAST_ADDED' };

/* ─── reducer ────────────────────────────────────────────── */

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.item.name === action.item.name);
      const items = existing
        ? state.items.map((i) =>
            i.item.name === action.item.name ? { ...i, qty: i.qty + 1 } : i,
          )
        : [...state.items, { item: action.item, qty: 1, notes: '' }];
      return { ...state, items, lastAdded: action.item.name };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.item.name !== action.name),
      };

    case 'UPDATE_QTY': {
      const updated = state.items
        .map((i) =>
          i.item.name === action.name
            ? { ...i, qty: Math.max(0, i.qty + action.delta) }
            : i,
        )
        .filter((i) => i.qty > 0);
      return { ...state, items: updated };
    }

    case 'SET_NOTES':
      return {
        ...state,
        items: state.items.map((i) =>
          i.item.name === action.name ? { ...i, notes: action.notes } : i,
        ),
      };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'CLEAR_LAST_ADDED':
      return { ...state, lastAdded: null };

    default:
      return state;
  }
}

/* ─── context ────────────────────────────────────────────── */

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  lastAdded: string | null;
  totalQty: number;
  /** Subtotal in LBP thousands (raw integer) */
  subtotal: number;
  addItem: (item: CartItemData) => void;
  removeItem: (name: string) => void;
  updateQty: (name: string, delta: number) => void;
  setNotes: (name: string, notes: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  clearLastAdded: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

/* ─── provider ───────────────────────────────────────────── */

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
    lastAdded: null,
  });

  const addItem = useCallback(
    (item: CartItemData) => dispatch({ type: 'ADD_ITEM', item }),
    [],
  );
  const removeItem = useCallback(
    (name: string) => dispatch({ type: 'REMOVE_ITEM', name }),
    [],
  );
  const updateQty = useCallback(
    (name: string, delta: number) => dispatch({ type: 'UPDATE_QTY', name, delta }),
    [],
  );
  const setNotes = useCallback(
    (name: string, notes: string) => dispatch({ type: 'SET_NOTES', name, notes }),
    [],
  );
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), []);
  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), []);
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), []);
  const clearLastAdded = useCallback(
    () => dispatch({ type: 'CLEAR_LAST_ADDED' }),
    [],
  );

  const totalQty = state.items.reduce((s, i) => s + i.qty, 0);
  const subtotal = state.items.reduce(
    (s, i) => s + parseInt(i.item.price, 10) * i.qty,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        lastAdded: state.lastAdded,
        totalQty,
        subtotal,
        addItem,
        removeItem,
        updateQty,
        setNotes,
        clearCart,
        openCart,
        closeCart,
        clearLastAdded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ─── hook ───────────────────────────────────────────────── */

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
