import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { getStoredBook } from '../../Utils/localStorage';

const PagesToRead = () => {
    const booksFromLoader = useLoaderData();
    const readbooksIds = getStoredBook("read");
    const readBooks = booksFromLoader.filter(book => readbooksIds.includes(book.bookId));

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
  
    const TriangleBar = (props) => {
        // eslint-disable-next-line react/prop-types
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='flex justify-center bg-[#13131308] lg:py-12 px-2 rounded-lg mt-8'>
            <BarChart 
                width={900}
                height={300}
                data={readBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" /> {/* Assuming bookName is the attribute you want to display on the X-axis */}
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {readBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};


export default PagesToRead;
