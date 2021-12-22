import {registerScreen} from "@haulmont/jmix-react-web";
import {ChordChart} from "@haulmont/jmix-addon-charts";

const ROUTING_PATH = "/chordChartScreen";

const ChordChartScreen = () => {

const data = [
  [
    1186,
    253,
    1496,
    1316,
    1253
  ],
  [
    268,
    406,
    1471,
    375,
    457
  ],
  [
    449,
    205,
    193,
    400,
    993
  ],
  [
    61,
    1441,
    333,
    192,
    264
  ],
  [
    332,
    685,
    93,
    183,
    7
  ]
];

  return <div>
    Chord Chart
    <div>
      <ChordChart
        layers={['ribbons', 'arcs', 'labels', 'legends']}
        keys={[ 'John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim' ]}
        matrix={data}/>
    </div>
  </div>;
}

registerScreen({
  component: ChordChartScreen,
  caption: "screen.ChordChartScreen",
  screenId: "ChordChartScreen",
  menuOptions: {
    pathPattern: ROUTING_PATH,
    menuLink: ROUTING_PATH
  }
});

export default ChordChartScreen;

