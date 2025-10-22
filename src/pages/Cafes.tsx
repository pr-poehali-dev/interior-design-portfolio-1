import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Cafes = () => {
  const projects = [
    {
      id: 1,
      title: 'Проект 1',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/86128f5b-4ade-46db-8b2d-1063f18c15c5.jpg'
    },
    {
      id: 2,
      title: 'Проект 2',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/e25dbe24-ba7d-4f7d-8826-4a2391a5ee15.jpg'
    },
    {
      id: 3,
      title: 'Проект 3',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/8e8c7a2b-5427-4b5c-bb66-fd4d931c05d0.jpg'
    },
    {
      id: 4,
      title: 'Проект 4',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/9d6a5532-6446-4a82-b97b-e3c6358b9e4c.jpg'
    },
    {
      id: 5,
      title: 'Проект 5',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/abea076b-dfde-41c4-ab3b-a7363bff930b.jpg'
    },
    {
      id: 6,
      title: 'Проект 6',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/a08ab1f5-8a51-4081-a631-f293a26b55f6.jpg'
    },
    {
      id: 7,
      title: 'Проект 7',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/33581fb3-b40c-4816-8db9-e2a8c5811d3d.jpg'
    },
    {
      id: 8,
      title: 'Проект 8',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/2442bbfd-afb1-4946-8077-eea71e91c311.jpg'
    },
    {
      id: 9,
      title: 'Проект 9',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/8ab6c3b7-e13f-4641-962a-d7772527587b.jpg'
    },
    {
      id: 10,
      title: 'Проект 10',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/5b5cf984-b500-4662-8703-e1579686c444.jpg'
    },
    {
      id: 11,
      title: 'Проект 11',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/86128f5b-4ade-46db-8b2d-1063f18c15c5.jpg'
    },
    {
      id: 12,
      title: 'Проект 12',
      coverImage: 'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/e25dbe24-ba7d-4f7d-8826-4a2391a5ee15.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex items-center h-20">
            <Link to="/" className="text-2xl lg:text-3xl font-light tracking-[0.3em] uppercase mr-auto">
              Shendrik.Co
            </Link>
            <Link to="/" className="text-sm font-light hover:opacity-60 transition-opacity">
              <Icon name="ArrowLeft" size={20} className="inline mr-2" />
              Назад
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-light mb-4 tracking-wide">Кафе и общественные пространства</h1>
          <p className="text-lg font-light text-gray-600 mb-12">Дизайн кафе, ресторанов, офисов и общественных зон</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/cafes/${project.id}`}
                className="block relative overflow-hidden group aspect-[4/3]"
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-2xl font-light text-white tracking-wide">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafes;
