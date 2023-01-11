import mongoose, { connect } from 'mongoose';

try {
    connect(`mongodb://localhost:27017/testCTrip0`);
    console.log('Connected successfully to DB');
    
} catch (error) {
    console.log('Error: ', error);
}

export default mongoose;