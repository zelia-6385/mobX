import { observer } from 'mobx-react-lite';
import useStore from './hooks/useStore';

function App() {
  const { users, boards } = useStore();

  console.log('active', boards.active?.toJSON());
  console.log('sections', boards.active?.sections.toJSON());
  // console.log('tasks', boards.active?.sections[0].tasks?.toJSON());

  return <div>start</div>;
}

export default observer(App);
