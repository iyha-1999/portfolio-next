type IdAndName = {
  id: string;
  name: string;
};

export type Profile = IdAndName & {
  thumbnail: string;
  description: string;
};

export type WorkLink = {
  icon: string;
  title: string;
  url: string;
};
export type WorkCard = {
  thumbnail: string;
  thumbnails: string[];
  title: string;
  description: string;
  links: WorkLink[];
  developmentEnvironment: string;
};
type Works = IdAndName & { cards: WorkCard[] };

export type contents = [Profile, Works];
