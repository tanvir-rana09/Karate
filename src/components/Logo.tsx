'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FC } from 'react';

interface IProps {
    className?: string;
}

const Logo: FC<IProps> = ({ className }) => {
    const { theme } = useTheme();

    return (
        <Image
            height={35}
            width={100}
            src={
                theme === 'dark'
                    ? 'https://i.ibb.co/dP2mjJd/logo.png'
                    : 'https://i.ibb.co/dP2mjJd/logo.png'
            }
            alt='site-logo'
            className={`${className} h-8 md:h-9 w-auto`}
            unoptimized
        />
    );
};

export default Logo;
