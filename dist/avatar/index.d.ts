import * as React from 'react';
export declare enum AvatarStyle {
    CircleRed = "CircleRed",
    CircleOrange = "CircleOrange",
    CircleYellow = "CircleYellow",
    CircleBlue = "CircleBlue",
    CircleGreen = "CircleGreen",
    CirclePurple = "CirclePurple",
    CircleWhite = "CircleWhite ",
    CircleLightGray = "CircleLightGray ",
    CircleDarkGray = "CircleDarkGray ",
    CircleBlack = "CircleBlack ",
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
    private mask1;
    private mask2;
    private mask3;
    render(): JSX.Element;
}
