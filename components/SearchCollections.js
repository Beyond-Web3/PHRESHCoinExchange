import { Select } from 'antd';
import { getCollectionsByChain } from "/helpers/collections.js";
import {useMoralisDapp} from '/providers/MoralisDappProvider/MoralisDappProvider'

function SearchCollections({setInputValue}){
    const { Option } = Select;
    const { chainId } = useMoralisDapp();
    const NFTCollections = getCollectionsByChain(chainId);
    
    

    function onChange(value) {
        setInputValue(value);
    }

    return (
        <>
        <Select
            showSearch
            style={{width: "300px",
                    marginLeft: "20px" }}
            placeholder="Find a Collection"
            optionFilterProp="children"
            onChange={onChange}
        >   
        {NFTCollections && 
            NFTCollections.map((collection, i) => 
            <Option key= {i} value={collection.addrs}> {collection.name}</Option>
            )
            }   
        </Select>
            
        </>
    )
}
export default SearchCollections;