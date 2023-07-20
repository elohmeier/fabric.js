import * as fabric from 'fabric';
import { beforeAll } from '../../test';

beforeAll(
  (canvas) => {
    const textValue = 'fabric.js sandbox';
    const text = new fabric.Textbox(textValue, {
      originX: 'center',
      width: 200,
      left: 150,
      top: 20,
      splitByGrapheme: true,
      styles: fabric.util.stylesFromArray(
        [
          {
            style: {
              fontWeight: 'bold',
              fontSize: 64,
            },
            start: 0,
            end: 9,
          },
        ],
        textValue
      ),
    });
    canvas.add(text);
    return { canvas, objects: { text } };
  },
  { width: 300, height: 200 }
);
