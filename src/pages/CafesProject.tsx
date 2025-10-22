import { Link, useParams } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const CafesProject = () => {
  const { id } = useParams();

  const projectImages = [
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/86128f5b-4ade-46db-8b2d-1063f18c15c5.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/e25dbe24-ba7d-4f7d-8826-4a2391a5ee15.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/8e8c7a2b-5427-4b5c-bb66-fd4d931c05d0.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/9d6a5532-6446-4a82-b97b-e3c6358b9e4c.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/abea076b-dfde-41c4-ab3b-a7363bff930b.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/a08ab1f5-8a51-4081-a631-f293a26b55f6.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/33581fb3-b40c-4816-8db9-e2a8c5811d3d.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/2442bbfd-afb1-4946-8077-eea71e91c311.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/8ab6c3b7-e13f-4641-962a-d7772527587b.jpg',
    'https://cdn.poehali.dev/projects/225e8d36-abe0-4bfc-92a7-a7816ca7b2fc/files/5b5cf984-b500-4662-8703-e1579686c444.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex items-center h-20">
            <Link to="/" className="text-2xl lg:text-3xl font-light tracking-[0.3em] uppercase mr-auto">
              Shendrik.Co
            </Link>
            <Link to="/cafes" className="text-sm font-light hover:opacity-60 transition-opacity">
              <Icon name="ArrowLeft" size={20} className="inline mr-2" />
              Назад к общественным пространствам
            </Link>
          </div>
        </div>
      </header>

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-light mb-12 tracking-wide">Проект {id}</h1>

          <div className="grid grid-cols-1 gap-1">
            {projectImages.map((image, index) => (
              <div key={index} className="w-full aspect-video">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafesProject;
