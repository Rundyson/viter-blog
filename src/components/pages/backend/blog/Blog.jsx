
import React from 'react'
import BlogTable from './BlogTable'
import { StoreContext } from '@/components/store/storeContext'
import { setIsAdd } from '@/components/store/storeAction'
import ModalAddBlog from './ModalAddBlog'
import SideNavigation from '../partials/SideNavigation'
import { Plus } from 'lucide-react'
import Header from '../partials/Header'
import SearchBar from '../partials/SearchBar'
import Footer from '../partials/Footer'
import ToastSuccess from '../partials/ToastSuccess'
import ModalError from '../partials/modals/ModalError'
import ModalValidation from '../partials/modals/ModalValidation'

const Blog = () => {
    const {dispatch, store} = React.useContext(StoreContext);
    const [itemEdit, setItemEdit] = React.useState(null);

    const handleAdd = () => {
      dispatch(setIsAdd(true));
      setItemEdit(null);
    }
  return (
    <>
    <section className="layout-main">
            <div className="layout-division">
            <SideNavigation menu="blog"/>
                <main>
                    <Header title="Blog" subtitle="Manage Blogs"/>
                    <div className="p-8">
                      <div className="flex justify-between items-center">
                        <SearchBar/>
                        <button className="btn btn-add" onClick={handleAdd}>
                          <Plus size={16}/> Add New
                        </button>
                      </div>
                      <BlogTable setItemEdit={setItemEdit}/>
                    </div>
                    <Footer/>
                </main>
            </div>
        </section>
        {store.validate && <ModalValidation/>}
        {store.error && <ModalError/>}
      {store.success && <ToastSuccess/>}
        {/* <SpinnerWindow/> */}
        {store.isAdd && <ModalAddBlog itemEdit={itemEdit}/>}
    </>
  )
}

export default Blog