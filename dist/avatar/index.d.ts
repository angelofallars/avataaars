import * as React from 'react';
export declare enum AvatarStyle {
    Fill = "Fill",
    Circle = "Circle",
    Transparent = "Transparent"
}
export interface Props {
    avatarStyle: AvatarStyle;
    className?: string;
    style?: React.CSSProperties;
}
export default class Avatar extends React.Component<Props> {
    private path1;
    private path2;
    private path3;
    private path4;
    private mask1;
    private mask2;
    private mask3;
    private mask4;
    render(): JSX.Element;
}
