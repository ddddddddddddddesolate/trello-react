import { CardType } from 'app/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      state.cards = [...state.cards, newCard];
    },
    updateCard(state, { payload: updatedCard }: PayloadAction<CardType>) {
      state.cards = state.cards.map((card) => {
        if (card.id === updatedCard.id) {
          return updatedCard;
        }

        return card;
      });
    },
    deleteCard(
      state,
      { payload: { id: deletedCardId } }: PayloadAction<CardType>
    ) {
      state.cards = state.cards.filter(
        ({ id: cardId }) => cardId !== deletedCardId
      );
    },
  },
});

export const cardsReducer = cardsSlice.reducer;
export const { createCard, updateCard, deleteCard } = cardsSlice.actions;
