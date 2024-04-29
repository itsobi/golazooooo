import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function TooltipCustom({
  icon,
  hoverText,
}: {
  icon: any;
  hoverText: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent className="w-44 text-slate-500 font-light">
          <p>{hoverText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
