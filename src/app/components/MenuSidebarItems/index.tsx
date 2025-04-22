import { LinksMenu } from '../LinksMenu';
interface MenuSidebarItemsProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const MenuSidebarItems = ({ isOpen, closeMenu }: MenuSidebarItemsProps) => {
  return (
    <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
      <div
        id="sidebar-collapse-menu"
        className={`bg-white shadow-lg h-screen fixed top-0 left-0 overflow-auto z-[99] transition-all duration-500
          ${isOpen ? 'max-lg:w-[250px] max-lg:visible' : 'max-lg:w-0 max-lg:invisible'} 
          lg:min-w-[250px] lg:w-max`}
      >
        <div className="flex items-center justify-between gap-2 pt-6 pb-2 px-4 sticky top-0 bg-white min-h-[64px] z-[100]">
          <img src="/assets/img/logo.png" alt="logo" className="w-[140px]" />

          <button 
            onClick={closeMenu} 
            className="lg:hidden text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <LinksMenu />
      </div>
    </nav>
  );
};
