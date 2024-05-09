import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function LoadingScreen() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <Skeleton />
      <Skeleton count={5} />
    </div>
  );
}
