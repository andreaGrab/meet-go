//this file is the same as index.html, the entry point
import React from "react";
import Content from "../components/content";

// dummy data

const longDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus est, convallis vel mi luctus, sodales maximus sem. Integer tincidunt blandit nunc, nec rhoncus odio rhoncus sed. Mauris ac lobortis nulla. Phasellus suscipit tellus quis est ornare interdum. Vestibulum viverra finibus convallis. Ut nec pretium nulla. Aenean tincidunt ante sed lacus porta aliquam. Mauris nec purus sed felis porta sodales. Praesent pulvinar vel nibh et condimentum. Curabitur ante sapien, elementum eu lacus eu, volutpat tempor tellus. Duis ut felis id diam sollicitudin tristique sit amet vel lectus. Fusce vel dui diam. Etiam sodales pharetra eros, et dictum eros tempor id. Quisque aliquet facilisis consequat. Morbi iaculis mollis venenatis. Maecenas metus sapien, fermentum eu vestibulum sed, vulputate a nisi. In eget leo elementum, fringilla magna in, consectetur odio. In et pretium dolor. Nulla sagittis ullamcorper metus, ac commodo odio pulvinar et. Nunc leo ligula, pharetra non lacinia id, suscipit venenatis nulla. Donec ornare enim eget molestie maximus. Sed lobortis vestibulum mi, eget commodo quam lobortis ut. Cras aliquet arcu eget magna finibus, nec porta mi dapibus. Praesent aliquet magna mauris, eu pellentesque elit tincidunt nec. Suspendisse at commodo enim, id tempor ipsum. Curabitur vel semper mauris. Etiam lacinia fermentum leo, ut posuere lectus porttitor ac. Nam tincidunt, ipsum nec tincidunt consectetur, lorem eros pretium enim, eget tincidunt odio magna id ex. Sed et facilisis magna. Fusce sed molestie felis, ut eleifend elit. Duis semper erat non ornare aliquam. Aenean dapibus ullamcorper imperdiet. Vivamus sem diam, bibendum vel feugiat nec, euismod nec massa. Etiam urna metus, euismod non nisl non, placerat venenatis magna. Morbi vitae fermentum nulla, vitae molestie nisl. Aenean lacinia turpis vel urna varius, ultricies iaculis orci finibus. Sed ut felis neque. Praesent in gravida eros, id tincidunt neque. Quisque convallis nibh est. In hac habitasse platea dictumst. Phasellus vitae finibus nunc. Nunc pulvinar condimentum velit id suscipit. Curabitur egestas velit eu eros volutpat, in iaculis magna fermentum. Proin euismod tellus quis metus vehicula dignissim. Vestibulum non laoreet dolor. Mauris volutpat libero vitae velit mattis pellentesque. Praesent vehicula hendrerit arcu in consequat. Curabitur non luctus leo, ut placerat ipsum. Ut at ex in odio euismod volutpat. Cras magna tortor, dapibus vel massa sollicitudin, gravida ullamcorper dolor. Nunc semper, nisi et feugiat bibendum, nunc justo faucibus nulla, vitae sollicitudin mauris augue ac nulla.';

export const events:any = [{
    title: 'Concert and Elegance Festival.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio soluta quo, aperiam ad fugiat sequi quae. Consequuntur, tempora labore, pariatur ex a nisi nesciunt sint unde dolore nostrum asperiores?',
    longDescription: longDescription,
    date: '10/12/2025',
    location: 'Grand Auditorium, Paris, France',
    organizer: 'Limbo Life ltd',
    soldTickets: 739,
    price: '12,99€',
    isDraft: true,
    gallery: [
        '/gallery_testing/event1/conductor.jpg',
        '/gallery_testing/event1/champagne.jpg',
        '/gallery_testing/event1/violin.jpg'
    ]
}, {
    title: 'Wedding on the beach!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio soluta quo, aperiam ad fugiat sequi quae. Consequuntur, tempora labore, pariatur ex a nisi nesciunt sint unde dolore nostrum asperiores?',
    longDescription: longDescription,
    date: '15/08/2025',
    location: 'Jesolo, Venice, Italy',
    organizer: 'Rossana DKW snc',
    soldTickets: 320,
    price: 'FREE',
    isDraft: false,
    gallery: [
        '/gallery_testing/event2/beach.jpg',
        '/gallery_testing/event2/fireworks.jpg',
        '/gallery_testing/event2/table-setting.jpg'
    ]
}, {
    title: 'Music party event',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio soluta quo, aperiam ad fugiat sequi quae. Consequuntur, tempora labore, pariatur ex a nisi nesciunt sint unde dolore nostrum asperiores?',
    longDescription: longDescription,
    date: '07/06/2025',
    location: 'Alpha Club, Berlin, Germany',
    organizer: 'Alpha Club',
    soldTickets: 739,
    price: '35,00€',
    isDraft: false,
    gallery: [
        '/gallery_testing/event3/hand.jpg',
        '/gallery_testing/event3/audience.jpg',
        '/gallery_testing/event3/music.jpg'
    ]
},{
    title: 'Concert and Elegance Festival.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio soluta quo, aperiam ad fugiat sequi quae. Consequuntur, tempora labore, pariatur ex a nisi nesciunt sint unde dolore nostrum asperiores?',
    longDescription: longDescription,
    date: '10/12/2025',
    location: 'Grand Auditorium, Paris, France',
    organizer: 'Limbo Life ltd',
    soldTickets: 739,
    price: '12,99€',
    isDraft: false,
    gallery: [
        '/gallery_testing/event1/conductor.jpg',
        '/gallery_testing/event1/champagne.jpg',
        '/gallery_testing/event1/violin.jpg'
    ]
}, {
    title: 'Wedding on the beach!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio soluta quo, aperiam ad fugiat sequi quae. Consequuntur, tempora labore, pariatur ex a nisi nesciunt sint unde dolore nostrum asperiores?',
    longDescription: longDescription,
    date: '15/08/2025',
    location: 'Jesolo, Venice, Italy',
    organizer: 'Rossana DKW snc',
    soldTickets: 320,
    price: 'FREE',
    isDraft: true,
    gallery: [
        '/gallery_testing/event2/beach.jpg',
        '/gallery_testing/event2/fireworks.jpg',
        '/gallery_testing/event2/table-setting.jpg'
    ]
}, {
    title: 'Music party event',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio soluta quo, aperiam ad fugiat sequi quae. Consequuntur, tempora labore, pariatur ex a nisi nesciunt sint unde dolore nostrum asperiores?',
    longDescription: longDescription,
    date: '07/06/2025',
    location: 'Alpha Club, Berlin, Germany',
    organizer: 'Alpha Club',
    soldTickets: 739,
    price: '35,00€',
    isDraft: true,
    gallery: [
        '/gallery_testing/event3/hand.jpg',
        '/gallery_testing/event3/audience.jpg',
        '/gallery_testing/event3/music.jpg'
    ]
}];
// ------"

// main component to display
export default function Home() {
  return (
    <div>
      <Content events={events}/>
    </div>
  );
}
