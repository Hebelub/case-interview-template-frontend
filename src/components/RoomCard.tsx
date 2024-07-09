import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Room } from '@/app/api/roomService';
import { Button } from '@/components/ui/button';


function RoomCard(props: Omit<Room, 'id'>) {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Room number: {props.roomNumber}</CardTitle>
        </CardHeader>
        <CardContent>
            {props.category.name}
        </CardContent>
        <CardFooter>
            <Button>Book Now</Button>
        </CardFooter>
    </Card>
  )
}

export default RoomCard