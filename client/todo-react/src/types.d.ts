interface Item {
  title: string;
  description: string;
  complete: boolean;
}

type ToggleItem = (currentItem: Item) => void;
