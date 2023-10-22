import { useGLTF } from '@react-three/drei'

export const Office = (props) => {
    const { nodes, materials } = useGLTF('/models/OfficeModel.glb')
    return (
        <group {...props}>
            <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
            <mesh geometry={nodes['02_library'].geometry} material={materials['02']} position={[0, 2.114, -2.23]} />
            <mesh geometry={nodes['03_attic'].geometry} material={materials['03']} position={[-1.97, 4.227, -2.199]} />
        </group>
    )
}

useGLTF.preload('/models/OfficeModel.glb')
