export interface MarsData {
  id: number;
  img: string;
  cameraName: string;
  roverName: string;
  created: string;

}

export class MarsData {
  constructor(
    id: number,
    img: string,
    cameraName: string,
    roverName: string,
    created: string
    ) {
    this.id = id;
    this.img = img;
    this.cameraName = cameraName ;
    this.roverName = roverName;
    this.created = created;
  }
}

