import React from "react";
import {BarsOutlined, HomeOutlined} from "@ant-design/icons";
import {HorizontalMenu, MenuItem, SubMenuItem} from "@haulmont/jmix-react-antd";

export const DemoMenuHorizontal = () => {
  return (
    <HorizontalMenu>
      <MenuItem caption={"Home"}
                icon={ <HomeOutlined />}
                key={'horizontal-home'}>
      </MenuItem>

      <SubMenuItem caption={"Other Electronics"} key={"horizontal-otherElectronics"}>
        <SubMenuItem caption={"Smartphones"} key={"horizontal-smartphones"}>
          <SubMenuItem caption={"IOS"} key={'horizontal-ios'}>
            <MenuItem caption={"Apple"}
                      icon={ <BarsOutlined />}
                      key={'horizontal-apple'}/>
          </SubMenuItem>
          <SubMenuItem caption={"Android"} key={'horizontal-android'}>
            <MenuItem caption={"Xiaomi"}
                      icon={<BarsOutlined />}
                      key={'horizontal-xiaomi'}/>
            <MenuItem caption={"Samsung"}
                      icon={<BarsOutlined />}
                      key={'horizontal-samsung'}/>
          </SubMenuItem>
        </SubMenuItem>
        <SubMenuItem caption={"Notebooks"} key={'horizontal-notebooks'}>
          <SubMenuItem caption={"Windows"} key={'horizontal-windows'}>
            <MenuItem caption={"Asus"}
                      icon={<BarsOutlined />}
                      key={'horizontal-asus'}/>
            <MenuItem caption={"Msi"}
                      icon={<BarsOutlined />}
                      key={'horizontal-msi'}/>
          </SubMenuItem>
          <SubMenuItem caption={"MacOS"} key={'horizontal-macos'}>
            <MenuItem caption={"MacbookAir"}
                      icon={<BarsOutlined />}
                      key={'horizontal-air'}/>
            <MenuItem caption={"MacbookPro"}
                      icon={<BarsOutlined />}
                      key={'horizontal-pro'}/>
          </SubMenuItem>
        </SubMenuItem>
      </SubMenuItem>


      <MenuItem caption={"User action"}
                icon={<BarsOutlined />}
                key={'horizontal-tv'}
                onClick={() => {
                  alert("User Action")
                }}/>

      <MenuItem caption={"Computers"}
                icon={<BarsOutlined />}
                key={'horizontal-computers'}/>
    </HorizontalMenu>
  );
};
