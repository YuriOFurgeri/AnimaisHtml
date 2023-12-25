type PetType = "dog"|"cat"|"fish"
type Pet = {
    type: PetType
    image: string
    name: string
    color: string
    sex: "Masculino"|"Feminino"
}

const data: Pet[] = [
    {
        type:"dog",
        image:"pastor-alemao.jpg",
        name:"Pastor-alemao",
        color:"Amarelo e preto",
        sex:"Masculino",
    }
]



export const Pet={
    getAll:():Pet[] =>{
        return data
    },
}