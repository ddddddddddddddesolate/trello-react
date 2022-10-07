import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from 'app/types';

interface CardsState {
  cards: CardType[];
}

const initialState: CardsState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    createCard(state, { payload: newCard }: PayloadAction<CardType>) {
      state.cards = [
        ...state.cards,
        { ...newCard, description: newCard?.description },
      ];
    },
    updateCard(state, { payload: updatedCard }: PayloadAction<CardType>) {
      state.cards = state.cards.map((card) => {
        if (card.id === updatedCard.id) {
          return updatedCard;
        }

        return card;
      });
    },
    deleteCard(state, { payload: deletedCardId }: PayloadAction<string>) {
      state.cards = state.cards.filter(
        ({ id: cardId }) => cardId !== deletedCardId
      );
    },
    resetCards(state) {
      state.cards = [];
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { createCard, updateCard, deleteCard, resetCards } =
  cardsSlice.actions;
