
export interface AccentColorConfig {
    baseAccentColor: string;
    mediumAccentColor: string;
    lightAccentColor: string;
}

const useAccentColor = () : AccentColorConfig => {
    const colorConfig: AccentColorConfig = {
        baseAccentColor: '#FF551B',
        mediumAccentColor: '#FF551B77',
        lightAccentColor: '#FF551B22',
    }

    return colorConfig;
}

export default useAccentColor;