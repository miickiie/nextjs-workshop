import { useState } from "react";
import { GetStaticProps } from "next";

interface Person {
    id: number;
    name: string;
}

interface PersonsProps {
    data: Person[];
}

export default function Persons({ data }: PersonsProps) {
    const [people, setPeople] = useState<Person[]>(data);

    const handleDelete = (id: number) => {
        setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
    };

    return (
        <div>
            <h1>People List</h1>
            <ul>
                {people.map((person) => (
                    <li key={person.id}>
                        {person.name}
                        <button onClick={() => handleDelete(person.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps: GetStaticProps<PersonsProps> = async () => {
    const data: Person[] = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ];

    return {
        props: {
            data,
        },
    };
};
