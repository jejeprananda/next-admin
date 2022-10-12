import { useState } from "react";
import { useEffect } from "react";

const Table = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);
    return (
        <div>
        <h1>Table</h1>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    }

export default Table;