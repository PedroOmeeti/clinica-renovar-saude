import {
  Container,
  Col,
  Row,
  List
} from "reactstrap";


// import Emojisorrindo from '../img/emojisorrindo.png'
import '../Clinica.components.css'
import '../Contato.components.css'

function Inicio() {
  return(
    <div>
      <p align="center" className='text-secondary h2'>
        Janeiro 2024
    </p>
    <br />
      
    <table className='bg-light text-center fw-bold' align="center" 
        cellspacing="21" cellpadding="21">
  
        <thead>
            <tr className='bg-secondary text-white'>
                <th>Dom</th>
                <th>Seg</th>
                <th>Ter</th>
                <th>Qua</th>
                <th>Qui</th>
                <th>Sex</th>
                <th>Sab</th>
            </tr>
        </thead>
          
        <tbody>
            <tr>
                <td className='text-tertiary'>31</td>
                <td className='text-tertiary'>1</td>
                <td className='text-tertiary'>2</td>
                <td className='text-tertiary'>3</td>
                <td className='text-tertiary'>4</td>
                <td className='bg-secondary text-white'>5</td>
                <td className='text-black'>6</td>
            </tr>
            <tr></tr>
            <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
            </tr>
            <tr>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
            </tr>
            <tr>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
            </tr>
            <tr>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td className='text-tertiary'>1</td>
                <td className='text-tertiary'>2</td>
                <td className='text-tertiary'>3</td>
            </tr>
            <tr>
                <td className='text-tertiary'>4</td>
                <td className='text-tertiary'>5</td>
                <td className='text-tertiary'>6</td>
                <td className='text-tertiary'>7</td>
                <td className='text-tertiary'>8</td>
                <td className='text-tertiary'>9</td>
                <td className='text-tertiary'>10</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Inicio