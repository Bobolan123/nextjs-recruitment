'use server'



export const getModule = async () => {
    const res = await fetch(`${process.env.API}/auth/profile`,{
        headers:{
            Authorization: `Bearer `
        },
        method: "GET"
    })
    const modules = await res.json()
    return modules.data
}