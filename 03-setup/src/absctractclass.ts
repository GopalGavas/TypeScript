abstract class TakePhoto {
  constructor(public cameramode: string, public filter: string) {}

  abstract getSepia(): void;
}

class Instagram extends TakePhoto {
  constructor(
    public cameramode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameramode, filter);
  }

  getSepia(): void {
    console.log("Get Sepia");
  }
}

const hc = new Instagram("test", "test", 3);
