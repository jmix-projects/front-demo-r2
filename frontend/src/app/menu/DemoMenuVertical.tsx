import React, {useState} from "react";
import {BarsOutlined, HomeOutlined} from "@ant-design/icons";
import {FormattedMessage} from "react-intl";
import {Button, Space} from "antd";
import Title from "antd/es/typography/Title";
import {MenuItem, SubMenuItem, VerticalMenu} from "@haulmont/jmix-react-antd";

export const DemoMenuVertical = () => {

  const [selectedMenuKeys, setSelectedMenuKeys] = useState<string[]>([]);
  const [openedMenuKeys, setOpenedMenuKeys] = useState<string[]>([]);

  return (
    <>
      <VerticalMenu selectedKeys={selectedMenuKeys}
                    openKeys={openedMenuKeys}
                    onOpenChange={openKeys => setOpenedMenuKeys(openKeys)}
                    onSelect={info => setSelectedMenuKeys(info.selectedKeys)}
      >
        <MenuItem caption={"router.home"}
                  icon={ <HomeOutlined />}
                  key={'horizontal-home'}>
        </MenuItem>

        <SubMenuItem caption={"Other Electronics"}
                     key={"horizontal-otherElectronics"}>
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
                        icon={<BarsOutlined/>}
                        key={'horizontal-asus'}/>

              <MenuItem caption={"Msi"}
                        icon={<BarsOutlined/>}
                        key={'horizontal-msi'}/>
            </SubMenuItem>
            <SubMenuItem caption={"MacOS"} key={'horizontal-macos'}>
              <MenuItem caption={"MacbookAir"}
                        icon={<BarsOutlined/>}
                        key={'horizontal-air'}/>
              <MenuItem caption={"MacbookPro"}
                        icon={<BarsOutlined/>}
                        key={'horizontal-pro'}/>

            </SubMenuItem>
          </SubMenuItem>
        </SubMenuItem>
        <MenuItem caption={"TV"}
                  icon={<BarsOutlined />}
                  key={'horizontal-tv'}/>

        <MenuItem caption={"Computers"}
                  icon={<BarsOutlined />}
                  key={'horizontal-computers'}/>
      </VerticalMenu>
      <br/>
      <Title level={4}>Programmatic manipulation</Title>
      <Space direction={"horizontal"}>
        <Button onClick={() => setSelectedMenuKeys(["horizontal-tv"])}>Select TV Menu Item</Button>
        <Button onClick={() => setOpenedMenuKeys(["horizontal-otherElectronics"])}>Open Other Electronics</Button>
        <Button onClick={() => setOpenedMenuKeys([])}>Close All Submenus</Button>
      </Space>

    </>
  );
};
