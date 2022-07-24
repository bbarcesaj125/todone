interface Item {
  title: string;
  description?: string;
  complete: boolean;
}
interface Theme {
  body: string;
  text: string;
  background: string;
  switchBackground: string;
  switchIcon: string;
  sliderActive: string;
  sliderInactive: string;
  border: string;
  name: string;
}
type Task = Omit<Item, "complete">;

type ToggleItem = (currentItem: Item) => void;
type ToggleTheme = () => void;
type AddItem = (task: Task) => void;
