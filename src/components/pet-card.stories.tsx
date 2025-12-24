import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PetCard } from "./pet-card";

const meta = {
  component: PetCard,
} satisfies Meta<typeof PetCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pet: {
      id: "1",
      name: "タロー",
      petType: "dog",
      hp: 100,
      ownerId: "user123",
    },
  },
};

export const LongName: Story = {
  args: {
    pet: {
      "id": "1",
      "name": "タロータロータロータロータロータロータロータロータロータロータロータロータロータロー",
      "petType": "dog",
      "hp": 100,
      "ownerId": "user123"
    }
  }
};

export const EmptyHP1: Story = {
  args: {
    pet: {
      "id": "1",
      "name": "タロー",
      "petType": "dog",
      "hp": 1,
      "ownerId": "user123"
    }
  }
};

export const HP0: Story = {
  args: {
    pet: {
      "id": "1",
      "name": "タロー",
      "petType": "dog",
      "hp": 0,
      "ownerId": "user123"
    }
  }
};
