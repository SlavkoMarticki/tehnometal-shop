declare module 'react-reveal' {
  export interface FadeProps {
    // Define the props for the Fade component here
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    cascade?: boolean;
    ssrFadeout?: boolean;
    top?: boolean;
    distance?: string;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
    collapse?: boolean;
    when?: boolean;
  }

  export const Fade: React.FC<FadeProps>;
}
