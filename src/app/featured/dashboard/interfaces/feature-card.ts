import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface FeatureCard {
    header: string,
    sub_header?: string,
    value: string;
    icon: IconProp;
}
