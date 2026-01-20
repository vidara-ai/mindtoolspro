
import React from 'react';

// Link direto para a imagem do logo oficial do MindTools Pro
export const LOGO_IMAGE_URL = 'https://drive.google.com/uc?export=view&id=1uikAlbhhdETfXgk8BUK7FfBWYjc1B1wn';

export const BrandLogo = ({ className }: { className?: string }) => (
  <img 
    src={LOGO_IMAGE_URL} 
    alt="MindTools Pro Logo" 
    className={`${className} object-contain`}
    style={{ filter: 'drop-shadow(0 0 15px rgba(34, 211, 238, 0.3))' }}
    onError={(e) => {
      (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/shapes/svg?seed=mindtools&backgroundColor=020617';
    }}
  />
);

export const CATEGORIES = [
  { icon: '🤖🎥', title: 'Criação de Vídeos', description: 'Transforme textos em produções cinematográficas em segundos.' },
  { icon: '🧠💬', title: 'Chats Inteligentes', description: 'Modelos de linguagem avançados para suporte e redação.' },
  { icon: '🖼✨', title: 'Imagens Ultra Realistas', description: 'Geração artística com detalhes fotográficos impressionantes.' },
  { icon: '🎤🔊', title: 'Áudio e Clonagem', description: 'Sintetize vozes e clone timbres com perfeição absoluta.' },
  { icon: '🤖🧑‍💻', title: 'Avatares e Lip Sync', description: 'Humanos digitais que falam e se expressam naturalmente.' },
  { icon: '🎵🎶', title: 'Criação de Músicas', description: 'Componha trilhas sonoras exclusivas em qualquer estilo.' },
  { icon: '🎨🧰', title: 'Design e Mídia', description: 'Bancos de recursos e ferramentas de edição assistida.' },
  { icon: '📊📢', title: 'SEO e Marketing', description: 'Otimização automatizada para dominar os mecanismos de busca.' },
  { icon: '🕵️‍♂️🔍', title: 'Spy Tools', description: 'Monitore a concorrência e descubra tendências antes de todos.' },
  { icon: '🎓👥', title: 'Cursos e Comunidade', description: 'Aprenda com especialistas e troque experiências no fórum.' },
  { icon: '📺🎁', title: 'Streaming (Bônus)', description: 'Acesso a conteúdos exclusivos para inspirar sua criatividade.' },
];

export const BENEFITS = [
  "Painel único e centralizado para todas as IAs",
  "Economia drástica de tempo e assinaturas individuais",
  "Acesso ilimitado às ferramentas premium",
  "Atualizações constantes com o que há de novo",
  "Interface ultra simples, rápida e intuitiva",
  "Escalabilidade real para o seu negócio digital"
];

export const AUDIENCE = [
  { profile: 'Criadores de Conteúdo', description: 'Produza 10x mais vídeos e artes para suas redes sociais.', image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=400&auto=format&fit=crop' },
  { profile: 'Gestores de Tráfego', description: 'Crie criativos que convertem em massa usando inteligência visual.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop' },
  { profile: 'Empreendedores Digitais', description: 'Automatize processos e reduza custos operacionais com equipe.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop' },
  { profile: 'Agências e Freelancers', description: 'Entregue projetos premium em tempo recorde para seus clientes.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop' },
];
