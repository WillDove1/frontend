import {Link, useLocation} from 'react-router-dom'
import {useAuth} from '../context/AuthContext';
import {IoPersonAdd, IoLogIn, IoAddCircle, IoLogOut, IoPerson, IoChevronDownSharp, IoBagAdd, IoBagSharp, IoChevronDown} from "react-icons/io5";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar(){
    const location = useLocation();
    const {isAuthenticated, logout, user} = useAuth();

    const getTitle = () => {
      const path = location.pathname.toLowerCase();
      if (path.includes('products')) {
        return 'Productos';
      } else if (path.includes('providers')) {
        return 'Proveedores';
      }else if (path.includes('add-provider')){
        return 'Añadiendo proveedor';
      }else if (path.includes('add-product')){
        return 'Añadiendo producto';
      } else if (path.includes('employees')) {
        return 'Empleados';
      }else if (path.includes('add-employee')){
        return 'Añadiendo empleado';
      }else if (path.includes('profile')){
        return 'Vista de profile';
      } else {
        return 'StoreI&E';
      }
    };

    return(
        <nav className='bg-zinc-700 my-3 flex justify-between items-start py-5 px-10 rounden-lg'>
            <Link to={
                isAuthenticated ? '/products' : '/'}
                
            >
                <h1 className='text-2xl font-bold'>{getTitle()}</h1>
            
            </Link>
            <ul className='flex gap-x-2'>
                {
                    isAuthenticated ? (
                        <>
                            <li>
                              <Link to='/profile' className='flex mx-3 px-3'>
                                <IoPerson size={30}/>{user.username}
                              </Link>

                            </li>
                            <li>

                            <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-zinc-700 px-3 py-2 text-sm ring-1 ring-inset ring-zinc-700 hover:bg-zinc-800">
            <IoBagSharp className='-mr-1 h-5 w-5'/> Productos
          
          <IoChevronDownSharp className='-mr-1 h-5 w-5' aria-hidden="true"/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/products"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <IoBagSharp className='h-5 w-5 inline-flex'/> Listar
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/add-product"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <IoBagAdd className='h-5 w-5 inline-flex'/> Agregar
                </Link>
              )}
            </Menu.Item>
          </div>
          
          
        </Menu.Items>
      </Transition>
    </Menu>

    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-zinc-700 px-3 py-2 text-sm ring-1 ring-inset ring-zinc-700 hover:bg-zinc-800">
          <FaPeopleCarryBox className='-mr-1 h-5 w-5'/>Proveedores
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/providers"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Listar proveedores
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/add-provider"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <IoBagAdd className='h-5 w-5 inline-flex'/> Agregar proveedores
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-zinc-700 px-3 py-2 text-sm ring-1 ring-inset ring-zinc-700 hover:bg-zinc-800">
          <IoIosPeople className='-mr-1 h-5 w-5'/>Empleados
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/employees"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Listar empleados
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/add-employee"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                    <IoBagAdd className='h-5 w-5 inline-flex'/> Agregar empleado
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    <Link to='/' onClick={() => { logout() }}
                  as="div" className="relative inline-block text-left"
                >
                    <IoLogOut className='h-5 w-5 inline-flex'/> Salir
    </Link>
                            </li>
                        
                        </>
                    ) : (
                        <>

                            <li>
                                <Link to='/login' 
                                className='bg-zinc-500 rounded-sm'
                                >
                                    <IoLogIn size={30}/>
                                </Link>
                            </li>
                            <li>
                                <Link to='/register' className='bg-zinc-500 rounded-sm'
                                >
                                    <IoPersonAdd size={30}/>
                                </Link>
                            </li>
                        </>
                    )
                }
            </ul>

        </nav>
    )
}

export default Navbar