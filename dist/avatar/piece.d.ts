import * as React from 'react';
export declare enum AvatarStyle {
    CircleRed = "CircleRed",
    CircleOrange = "CircleOrange",
    CircleYellow = "CircleYellow",
    CircleBlue = "CircleBlue",
    CircleGreen = "CircleGreen",
    CirclePurple = "CirclePurple",
    CircleCerulean = "CircleCerulean",
    CircleWhite = "CircleWhite ",
    CircleLightGray = "CircleLightGray ",
    CircleDarkGray = "CircleDarkGray ",
    CircleBlack = "CircleBlack ",
    Transparent = "Transparent"
}
export interface Props {
    pieceSize?: string;
    pieceType?: string;
    avatarStyle: AvatarStyle;
    style?: React.CSSProperties;
    viewBox?: string;
}
export default class PieceComponent extends React.Component<Props> {
    render(): JSX.Element;
}
