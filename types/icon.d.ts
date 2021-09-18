import { BasicComponent } from './basicComponent'

export interface IconProps {
    name?: string;
    size?: string;
    color?: string;
}

export class Icon extends BasicComponent {
    $props: IconProps
}

export class _IconComponent extends Icon {
}
