import { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav"
import useAuth from '../hooks/useAuth'
import { Alerta } from "../components/Alerta";

const EditarPerfil = () => {

    const { auth, actualizarPerfil } = useAuth();
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})

    useEffect(() => {
        setPerfil(auth);
    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()

        const {nombre, email} = perfil;

        if([nombre, email].includes('')) {
            setAlerta({
                msg: 'Email y Nombre son obligatorios',
                error: true
            })

            return;
        }

        const resultado = await actualizarPerfil(perfil);

        setAlerta(resultado);
    }

    const { msg } = alerta

  return (
    <>
        <AdminNav />

        <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
        <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''} <span className="text-indigo-600 font-bold">Información Aquí</span></p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                {msg && <Alerta alerta={alerta} />}
                <form 
                    onSubmit={handleSubmit}
                >
                    <div className="my-3">
                        <label htmlFor="" className="uppercase font-bold text-gray-600">Nombre</label>
                        <input 
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" 
                            name="nombre"
                            value={perfil.nombre || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="" className="uppercase font-bold text-gray-600">Sitio Web</label>
                        <input 
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" 
                            name="web"
                            value={perfil.web || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="" className="uppercase font-bold text-gray-600">Teléfono</label>
                        <input 
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" 
                            name="telefono"
                            value={perfil.telefono || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="" className="uppercase font-bold text-gray-600">Email</label>
                        <input 
                            type="text"
                            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" 
                            name="email"
                            value={perfil.email || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Guardar Cambios"
                        className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 cursor-pointer"
                    />
                </form>
            </div>
        </div>
    </>
  )
}

export default EditarPerfil