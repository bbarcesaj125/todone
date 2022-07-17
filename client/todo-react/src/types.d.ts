interface Item {
  title: string;
  description?: string;
  complete: boolean;
}
type Task = Omit<Item, "complete">;

type ToggleItem = (currentItem: Item) => void;
type AddItem = (task: Task) => void;
