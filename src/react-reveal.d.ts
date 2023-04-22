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

  export interface ZoomProps {
    bottom?: boolean;
    children: React.ReactNode;
  }

  export const Fade: React.FC<FadeProps>;

  export const Zoom: React.FC<ZoomProps>;
}
