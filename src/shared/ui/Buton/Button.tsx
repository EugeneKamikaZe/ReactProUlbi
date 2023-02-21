import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
    isSquare? : boolean,
    size?: ButtonSize,
    isDisabled?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        isSquare,
        isDisabled,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [s[theme]]: true,
        [s.square]: isSquare,
        [s[size]]: true,
        [s.disabled]: isDisabled,
    };

    return (
        <button
            type="button"
            className={classNames(s.Button, mods, [className, s[theme]])}
            disabled={isDisabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
