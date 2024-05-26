import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

export default function SendComment() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="">
      {pending ? 'Creating comment...' : 'Comment'}
    </Button>
  );
}
