const person1 = {
    name: "Indu",
    profiles: ["Facebook","Instagram","Linkedin"],
    printProfiles:()=>{
       person1.profiles.forEach(element => {
           document.write(element)
       });
    }
}

export default function LearningJavaScript(){
    return(
        <>
            <div>{person1.name}</div>
            <div>{person1.printProfiles()}</div>
        </>
    )
}