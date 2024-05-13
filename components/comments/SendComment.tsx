import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

export default function SendComment() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-full mt-2">
      {pending ? 'Sending comment...' : 'Send comment'}
    </Button>
  );
}
