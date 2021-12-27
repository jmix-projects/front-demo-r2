import { localesStore } from "@haulmont/jmix-react-web";
import cn from "./cn.json";

localesStore.addLocale({
    locale: 'cn',
    caption: "Chinese",
    messages: cn
});
