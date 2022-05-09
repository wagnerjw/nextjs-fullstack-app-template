import { IExampleCard } from './ExampleCard';

const base: IExampleCard = {
  tag: 'Post Preview',
  title: `What's new in Lorum`,
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  author: 'User_Name',
  time: '2h ago',
};

export const mockExampleCardProps = {
  base,
};
