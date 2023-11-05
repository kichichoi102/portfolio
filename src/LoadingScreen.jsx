import { Html } from "@react-three/drei"

export const LoadingScreen = ({progress}) => {
    return <Html><h1>{Math.round(progress)}%</h1></Html>
}