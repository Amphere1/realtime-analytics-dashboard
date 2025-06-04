import { useEffect } from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const DashBoard = () => {
    useEffect(() => {
        socket.on('realtime data', (data) => {
            //handle incoming data
            console.log('recieved data:', data);
            //will update state and charts here
        })
    }, []);

    return (
        <div>
            {/*dashboard content will be here*/}
        </div>
    )
}